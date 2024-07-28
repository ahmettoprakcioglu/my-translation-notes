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
    throw new Error('Translation Note could not be added');
  }
    
  return data;
}

export async function updateNote({ id, data: payload }) {
  const { data, error } = await supabase
    .from('translation-notes')
    .update(payload)
    .eq('id', id)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Translation Note could not be updated');
  }

  return data;
}

export async function deleteNote(id) {

  const { error } = await supabase
    .from('translation-notes')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(error);
    throw new Error('Translation Note could not be deleted');
  }
  return '';
}