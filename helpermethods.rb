module HelperMethods
  def this_one?(word)
    danger = ["of","from","in","the"]
    dictator = true
    danger.each do |ex|
      if word != ex
        dictator = true
      else
        dictator = false
        break
      end
    end
    dictator
  end

  def titelize(str)
    words = str.split(" ")
    words.each do |word|
      if this_one?(word)
        word.capitalize!
      end
    end
    words.join(" ")
  end
end
