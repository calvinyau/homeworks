class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new
    @name1 = name1
    @name2 = name2
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    6.times { |i| @cups << [:stone, :stone, :stone, :stone] }
    @cups << []
    6.times { |i| @cups << [:stone, :stone, :stone, :stone] }
    @cups << []
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless start_pos.between?(1, 6) || start_pos.between?(7, 12)
  end

  def make_move(start_pos, current_player_name)
    stones_to_spread = @cups[start_pos]
    index = start_pos
    until stones_to_spread.empty?
      index += 1
      index = 0 if index > 13
      if index == 6
        @cups[index] << stones_to_spread.pop if current_player_name == @name1
      elsif index == 13
        @cups[index] << stones_to_spread.pop if current_player_name == @name2
      else
        @cups[index] << stones_to_spread.pop
      end
    end

    render
    next_turn(index)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      return :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    bottom = true
    top = true
    (0..6).each do |x|
      bottom = false if @cups[x].count > 0
    end
    (7..12).each do |x|
      top = false if @cups[x].count > 0
    end
    bottom || top
  end

  def winner
    score1 = @cups[6].count
    score2 = @cups[13].count
    return :draw if score1 == score2
    return @name1 if score1 > score2
    @name2
  end
end
