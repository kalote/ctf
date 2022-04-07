resource "aws_instance" "app" {

  ami           = var.instance_ami
  instance_type = var.instance_type
  key_name      = var.key_name

  vpc_security_group_ids = [var.sg_id]

  user_data = <<-EOF
    #!/bin/bash
    sudo yum update -y
    sudo yum install docker -y
    sudo service docker start
    EOF

  tags = {
    Name       = var.vm_name
    Challenges = var.challenges
  }

  # provisioner "local-exec" {
  #   command = "export AWS_PROFILE='ctf' && aws ec2 stop-instances --instance-ids ${aws_instance.app.id}"
  # }
}

resource "aws_eip" "app" {
  instance = aws_instance.app.id
}
