require 'rails_helper'

describe Player, type: :model do
  describe '#name' do
    let(:player) { described_class.new(first_name: 'Naomi', last_name: 'Jacobs')}

    it 'returns the full name' do
      expect(player.name).to eq 'Naomi Jacobs'
    end
  end
end
