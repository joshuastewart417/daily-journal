/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
        <section id="entry--${entry.id}" class="journalEntry">
            <ul>
					<li class="entry-details"><strong>Date:</strong> ${entry.date}</li>
					<li class="entry-details"><strong>Mood:</strong> ${entry.mood}</li>
					<li class="entry-details"><strong>Concept:</strong> ${entry.concept} inches</li>
					<li class="entry-details"><strong>Entry:</strong> ${entry.entry}</li>
			</ul>
        </section>
    `;
};
