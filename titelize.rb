require './helpermethods'


class Include
  include HelperMethods
end

class Extend
  extend HelperMethods
end

p a = Include.new.titelize("hello in of from the include world") #You need to create a class
p b = Extend.titelize("hello in of from the extend world") #You don't need to create a class
