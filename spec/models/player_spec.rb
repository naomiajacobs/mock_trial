require 'rails_helper'

describe Player, type: :model do
  describe '#name' do
    let(:player) { described_class.new.tap do |player|
      player.first_name = 'Naomi'
      player.last_name = 'Jacobs'
    end }

    it 'returns the full name' do
      expect(player.name).to eq 'Naomi Jacobs'
    end
  end
end
