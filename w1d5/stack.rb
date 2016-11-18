class Stack
  def initialize
    @elements = []
  end

  def add(el)
    @elements << el
  end

  def remove
    @elements.pop
  end

  def show
    @elements
  end
end
