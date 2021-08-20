const journal = [
  {
    id: 1,
    date: "08/16/2021",
    concept: "HTML & CSS",
    entry:
      "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Unsure",
  },
  {
    id: 2,
    date: "08/18/2021",
    concept: "Complex Flexbox",
    entry:
      "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain.",
    mood: "Depressed",
  },
  {
    id: 2,
    date: "08/20/2021",
    concept: "Complex Flexbox",
    entry:
      "Still can't understand what to do with flexbox, may need to go over the lesson again.",
    mood: "Confused",
  },
];

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};
