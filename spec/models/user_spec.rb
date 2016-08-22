require 'rails_helper'

describe User, type: :model do
  let(:user) { described_class.new(first_name: 'Naomi', last_name: 'Jacobs', email: 'naomiajacobs@gmail.com')}

  describe 'validity' do
    it 'is valid' do
      expect(user.valid?).to eq true
    end

    describe 'name' do
      it 'has a name' do
        user.update_attributes(first_name: '', last_name: '')
        expect(user.valid?).to eq false
      end

      it 'has a name of acceptable length' do
        user.update_attributes(first_name: 'a'*26, last_name: 'b'*26)
        expect(user.valid?).to eq false
      end
    end

    describe 'email' do
      it 'exists' do
        user.update_attributes(email: '')
        expect(user.valid?).to eq false
      end

      it 'is not too long' do
        user.update_attributes(email: 'a'*256)
        expect(user.valid?).to eq false
      end

      it 'has a valid email string' do
        user.update_attributes(email: 'aksdhfksjhdbker')
        expect(user.valid?).to eq false
      end
    end
  end

  describe '#name' do
    it 'returns the full name' do
      expect(user.name).to eq 'Naomi Jacobs'
    end
  end
end
