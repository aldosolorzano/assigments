class Book
  attr_accessor :title, :chapters

  def initialize
    @@chapters = [];
  end
  
  def add_chapter(title)
    @@chapters << title
  end

  def chapters
    puts "Your book #{title} has #{@@chapters.length} chapters"
    @@chapters.each_with_index do |chapter, number|
      print "#{number+1}. #{chapter}\n"
    end
  end
end

book = Book.new
book.title = "My Awesome Book"
book.add_chapter("My Awesome Chapter 1")
book.add_chapter("My Awesome Chapter 2")
book.add_chapter("My Awesome Chapter 3")
book.add_chapter("My Awesome Chapter 4")
book.add_chapter("My Awesome Chapter 5")
book.add_chapter("My Awesome Chapter 6")
book.chapters

harry = Book.new
harry.title = "Harry Potter"
harry.add_chapter("Prisioner")
harry.add_chapter("Not prisioner")
harry.chapters
