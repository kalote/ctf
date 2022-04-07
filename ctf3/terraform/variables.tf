variable "region" {
  default = "ap-southeast-1"
}

variable vms {
  description = "Map of VMs to configure."
  type        = map
  default     = {
    sql = {
      challenges = "basic, blind, timing"
    },
    web = {
      challenges = "starter, path"
    },
    NoBrute = {
      challenges = "JWT, JWT3, FUN3"
    },
    brute1 = {
      challenges = "MD5"
    },
    brute2 = {
      challenges = "NoSQL, NoSQL2"
    },
    others = {
      challenges = "XXE, SSRF"
    }
  }
}
