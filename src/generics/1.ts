import axios from 'axios';

async function fetchData<T>(url: string):  Promise<T | never> {
  try {
    const response = await axios.get(url);
    const data: T = response.data;
    return data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
