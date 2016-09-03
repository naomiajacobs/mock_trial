class RemoveNumberFromTeams < ActiveRecord::Migration[5.0]
  def change
    remove_column :teams, :number
  end
end
