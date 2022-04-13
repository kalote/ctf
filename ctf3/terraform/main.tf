terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 2.70"
    }
  }
}

provider "aws" {
  profile = "ctf"
  region  = var.region
}

module "ec2_instances" {
  source = "./modules/aws-instance"

  for_each = var.vms

  vm_name = each.key
  challenges = each.value.challenges
}

resource "aws_s3_bucket" "somuchfun" {
  bucket = "somuchfuninthebucket"
  acl    = "public-read"
  policy = file("../somuchfuninthebucket/policy.json")

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket" "uxui" {
  bucket = "theworstuxuiever"
  acl    = "public-read"
  policy = <<EOF
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::theworstuxuiever/*"
    }
  ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  provisioner "local-exec" {
    command = "export AWS_PROFILE='ctf' && aws s3 sync ~/project/ctf/ctf3/UXUI/ s3://${aws_s3_bucket.uxui.id}/"
  }
}

resource "aws_s3_bucket_object" "flagfile" {
  bucket = aws_s3_bucket.somuchfun.id
  key    = "youfoundme-bchwye7u82739ru0hf"
  source = "../somuchfuninthebucket/youfoundme-bchwye7u82739ru0hf.txt"

  content_type = "text/html"
}

resource "aws_s3_bucket_object" "indexfile" {
  bucket = aws_s3_bucket.somuchfun.id
  key    = "index.html"
  source = "../somuchfuninthebucket/index.html"

  content_type = "text/html"
}
