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

  describe 'counting and sorting email characters', js: true do
    it 'has a button for counting and sorting email characters' do
      expect(page).to have_button('Show Email Character Count')
    end

    context 'when the button is clicked' do
      let(:first_character) do
        within '.email-char-count' do
          first('td').text
        end
      end

      before { click_button('Show Email Character Count') }

      it 'generates the table with the correct data' do
        expect(page).to have_css('tr th', text: 'Character')
        expect(page).to have_css('tr th', text: 'Count')
        expect(page).to have_css('tr td#count-o', text: 8)
      end

      it 'displays the most used character first' do
        expect(first_character).to eq('e')
      end
    end
  end
end
