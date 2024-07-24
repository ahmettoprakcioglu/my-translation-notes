import supabase from './supabase';

export async function getTranslationNotes() {
  let { data, error } = await supabase
    .from('translation-notes')
    .select('*');
  
  if (error) {
    console.error(error);
    throw new Error('Translation Notes could not be loaded');
  }
  
  return data;
}

export async function addTranslationNotes(newNote) {
  const { data, error } = await supabase
    .from('translation-notes')
    .insert([
      newNote
    ])
    .select();
    
  if (error) {
    console.error(error);
    throw new Error('Translation Notes could not be added');
  }
    
  return data;
}