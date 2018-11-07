require 'rails_helper'

describe 'People page functionality', type: :feature do
  let(:user) { User.create(email: 'user@example.com', password: 'password') }
  let(:people) do
    [
      Struct::Person.new('Josh Phillips', 'joshp@example.com', 'Engineer'),
      Struct::Person.new('Steve Wonder', 'steve.wonder@example.com', 'Artist'),
      Struct::Person.new('Stevie Wonder', 'stevie.wonder@example.com', 'Musician'),
      Struct::Person.new('Josh Smith', 'josh.smith@example.com', 'Marketing')
    ]
  end

  before :all do
    Struct.new('Person', :display_name, :email_address, :title)
  end

  before do
    allow(People).to receive(:all) { people }
    login_as(user)
    visit '/'
  end

  describe 'listing users' do
    it 'displays the users names' do
      expect(page).to have_content('Josh Phillips')
      expect(page).to have_content('Steve Wonder')
      expect(page).to have_content('Stevie Wonder')
      expect(page).to have_content('Josh Smith')
    end

    it 'displays the users emails' do
      expect(page).to have_content('joshp@example.com')
      expect(page).to have_content('steve.wonder@example.com')
      expect(page).to have_content('stevie.wonder@example.com')
      expect(page).to have_content('josh.smith@example.com')
    end

    it 'displays the users job title' do
      expect(page).to have_content('Engineer')
      expect(page).to have_content('Artist')
      expect(page).to have_content('Musician')
      expect(page).to have_content('Marketing')
    end
  end
end
