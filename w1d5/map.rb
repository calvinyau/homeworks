class Map
  def initialize
    @elements = []
  end

  def assign(key, value)
    @elements.each do |ele|
      if ele[0] == key
        ele[1] = value
        return
      end
    end
    @elements << [key, value]
  end

  def lookup(key)
    result = nil
    @elements.each do |ele|
      if ele[0] == key
        result = ele[1]
      end
    end
    result
  end

  def remove(key)
    @elements.each do |ele|
      if ele[0] == key
        @elements.delete([ele[0], ele[1]])
      end
    end
  end

  def show
    @elements
  end
end
