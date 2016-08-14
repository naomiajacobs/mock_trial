class CreateTeamPlacements < ActiveRecord::Migration[5.0]
  def change
    create_table :team_placements do |t|
      t.string :team_placement

      t.timestamps
    end
  end
end
