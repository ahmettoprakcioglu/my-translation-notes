import supabase from './supabase';

export async function getTranslationNotes({ page = 0, pageSize = 10, searchTerm = '' } = {}) {
  const from = page * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from('translation-notes')
    .select('id', { count: 'exact', head: true });

  // Eğer arama terimi varsa, filtreleme ekle
  if (searchTerm) {
    query = query.or(`originalWord.ilike.%${searchTerm}%,translation.ilike.%${searchTerm}%`);
  }

  const countQuery = await query;

  // Veri sorgusu için yeni bir query oluştur
  let dataQuery = supabase
    .from('translation-notes')
    .select('*')
    .order('created_at', { ascending: false })
    .range(from, to);

  // Aynı filtrelemeyi veri sorgusu için de uygula
  if (searchTerm) {
    dataQuery = dataQuery.or(`originalWord.ilike.%${searchTerm}%,translation.ilike.%${searchTerm}%`);
  }

  const { data, error } = await dataQuery;
  
  if (countQuery.error || error) {
    console.error(countQuery.error || error);
    throw new Error('Translation Notes could not be loaded');
  }
  
  return {
    data,
    totalCount: countQuery.count
  };
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

export async function getRandomTranslationNote() {
  // Önce toplam kayıt sayısını al
  const { count, error: countError } = await supabase
    .from('translation-notes')
    .select('*', { count: 'exact', head: true });

  if (countError) {
    console.error(countError);
    throw new Error('Could not get total count');
  }

  // Rastgele bir offset değeri hesapla
  const randomOffset = Math.floor(Math.random() * count);

  // Rastgele seçilen offsetten 1 kayıt getir
  const { data, error } = await supabase
    .from('translation-notes')
    .select('*')
    .range(randomOffset, randomOffset)
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Random Translation Note could not be loaded');
  }

  return data;
}