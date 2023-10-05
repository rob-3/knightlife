import type { PageLoad } from './$types';
import type { SampleType } from 'types';

export const load: PageLoad = async () => {
  const res = await fetch('http://localhost:5000/sampleData');
  const { data } = (await res.json()) as { data: SampleType[] };
  console.log(data);
  return { data };
};
