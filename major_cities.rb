$major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]}
def major_cities(hash)
  hash.each do|province, cities|
    print "#{province} has #{cities.length} cities: "
    cities.each do|city|
      if cities[cities.length-2] == city
        print "#{cities[cities.length-2]} and #{cities.last}\n"
        break
      else
        print "#{city}, "
      end
    end
  end
end

major_cities($major_cities)
