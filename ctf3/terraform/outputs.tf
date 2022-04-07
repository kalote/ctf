output "uxui_domain" {
  description = "The bucket domain name. Will be of format bucketname.s3.amazonaws.com."
  value       = aws_s3_bucket.uxui.bucket_domain_name
}

output "somuchfun_domain" {
  description = "The bucket domain name. Will be of format bucketname.s3.amazonaws.com."
  value       = aws_s3_bucket.somuchfun.bucket_domain_name
}

output "uxui_website" {
  description = "Website endpoint"
  value       = aws_s3_bucket.uxui.website_endpoint
}

output "somuchfun_website" {
  description = "Website endpoint"
  value       = aws_s3_bucket.somuchfun.website_endpoint
}

output instance_public_dns {
  description = "Public DNS of EC2 instances"
  value       = { for p in sort(keys(var.vms)) : p => module.ec2_instances[p].instance_public_dns }
}

output instance_public_ip {
  description = "Public IPs of EC2 instances"
  value       = { for p in sort(keys(var.vms)) : p => module.ec2_instances[p].instance_public_ip }
}

output eip_public_ip {
  description = "EIP public IPs of EC2 instances"
  value       = { for p in sort(keys(var.vms)) : p => module.ec2_instances[p].eip_public_ip }
}
