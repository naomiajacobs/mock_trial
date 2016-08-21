class Player < ActiveRecord::Base
  belongs_to :team

  attr_accessor :last_name, :first_name

  def name
    "#{first_name} #{last_name}"
  end
end
