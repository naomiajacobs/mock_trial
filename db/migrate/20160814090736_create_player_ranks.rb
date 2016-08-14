class CreatePlayerRanks < ActiveRecord::Migration[5.0]
  def change
    create_table :player_ranks do |t|
      t.string :player_rank

      t.timestamps
    end
  end
end
