import { getJournalEntries } from "./JournalData.js";
import { JournalEntryComponent } from "./JournalEntry.js";

// DOM reference to where all entries will be rendered
const entryList = document.querySelector(".entryList");

export const EntryListComponent = () => {
  // Use the journal entry data from the data module component
  const entries = getJournalEntries();

  let entryHTML = " ";

  for (const entry of entries) {
    entryHTML += JournalEntryComponent(entry);
  }

  entryList.innerHTML += `${entryHTML}`;
};
