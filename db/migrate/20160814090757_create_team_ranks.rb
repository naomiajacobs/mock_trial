class CreateTeamRanks < ActiveRecord::Migration[5.0]
  def change
    create_table :team_ranks do |t|
      t.string :team_rank

      t.timestamps
    end
  end
end
