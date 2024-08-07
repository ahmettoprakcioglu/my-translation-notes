
# My Translation Notes
## Description

My Translation Notes is an intuitive web-based tool designed to enhance vocabulary learning and translation practice. The application features a user-friendly interface that allows users to input and store new vocabulary words along with their translations. Key functionalities include:
- **Form Area:** Users can easily add new words and their translations through a simple form. The form includes two input fields: one for the original word and the other for its translation.

- **Flip Card Mechanism:** The application utilizes a flip card to facilitate active recall and self-testing. A randomly selected word from the user's entries is displayed on the card. Initially, only the original word is shown. Upon clicking the card, it flips to reveal the translation.

- **Random Selection:** To enhance learning and retention, each flip card session presents a different randomly selected word from the user's stored entries.

- **My Notes Table:** Users can view all their added notes in a dedicated table called "My Notes." This table also allows users to edit or delete any of their previously entered notes, providing a comprehensive and flexible way to manage their vocabulary list.

My Translation Notes is ideal for language learners who want to build and reinforce their vocabulary in an interactive and engaging manner.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`VITE_API_KEY: your_api_key_here`

`VITE_API_URL: your_api_url_here`

Replace your_api_key_here with your actual API key and your_api_url_here with the URL of your API.

## Installation

Install the project with npm

```bash
  npm install
  npm run dev
```
## Tech Stack

**Client:** React, TanStack Query, TailwindCSS

**Server:** Supabase

