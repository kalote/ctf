variable "vm_name" {
  type = string
  description = "name of the instance"
}

variable "instance_type" {
  type = string
  default = "t2.micro"
}

variable "instance_ami" {
  type = string
  default = "ami-015a6758451df3cb9"
}

variable "sg_id" {
  type = string
  default = "sg-0dbf64fdc0e9f2ac6"
}

variable "challenges" {
  type = string
  description = "challenges list running on the instance"
}

variable "key_name" {
  type = string
  default = "ctf_default"
}
