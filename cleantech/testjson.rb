#!/usr/bin/env ruby

require 'json'

jsoncounty = '{"success":true,"id":null,"DecimalLatitude":"30","DecimalLongitude":"-90","CountryNameCode":"US","CountryName":"United States","State":"Louisiana","County":"Orleans","Alt":1}'

result = JSON.parse(jsoncounty)

puts result
