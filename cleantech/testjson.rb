#!/usr/bin/env ruby

require 'json'

# curl "http://labs.silverbiology.com/countylookup/lookup.php?cmd=findCounty&DecimalLatitude=30&DecimalLongitude=-90"
# http://developer.yahoo.com/ruby/ruby-json.html

jsoncounty = '{"success":true,"id":null,"DecimalLatitude":"30","DecimalLongitude":"-90","CountryNameCode":"US","CountryName":"United States","State":"Louisiana","County":"Orleans","Alt":1}'

result = JSON.parse(jsoncounty)

puts result
