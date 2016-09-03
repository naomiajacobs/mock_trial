class FixInitialModelColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :ballots, :ballot

    rename_column :judges, :judge, :first_name
    add_column :judges, :last_name, :string

    remove_column :player_ranks, :player_rank
    add_column :player_ranks, :value, :integer

    rename_column :players, :player, :first_name
    add_column :players, :last_name, :string

    rename_column :roles, :role, :type
    add_column :roles, :witness_name, :string

    remove_column :rounds, :round
    add_column :rounds, :number, :integer

    rename_column :scores, :score, :type
    add_column :scores, :value, :integer
    add_column :scores, :order, :integer

    remove_column :team_placements, :team_placement
    add_column :team_placements, :value, :integer
    add_column :team_placements, :trophy, :boolean
    add_column :team_placements, :honorable_mention, :boolean

    rename_column :team_ranks, :team_rank, :next_round_side
    add_column :team_ranks, :value, :integer
    add_column :team_ranks, :after_round_number, :integer

    add_column :teams, :team_number, :integer

    rename_column :tournaments, :tournament, :name
    add_column :tournaments, :date, :date
    add_column :tournaments, :coin_flip, :boolean
  end
end
