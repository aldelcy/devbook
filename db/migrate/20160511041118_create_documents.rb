class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :name
      t.references :language, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
