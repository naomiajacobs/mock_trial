class Team < ActiveRecord::Base
  belongs_to :school
  has_many :players
end
