output instance_public_dns {
  description = "List of public DNS names assigned to the instances."
  value       = aws_instance.app.*.public_dns
}
output instance_public_ip {
  description = "List of public IP addresses assigned to the instances, if applicable"
  value       = aws_instance.app.*.public_ip
}

output eip_public_ip {
  description = "EIP public IP"
  value = aws_eip.app.*.public_ip
}
