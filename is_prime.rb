def is_prime(n)
  divider = 1
  result = 0
  n.times do
    if n%divider == 0
      result += 1
      divider +=1
    else
      divider +=1
    end
  end
  result == 2
end
p is_prime(199)
