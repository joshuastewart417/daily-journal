/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
        <section id="entry--${entry.id}" class="journalEntry">
            <ul>
					<li class="entry-details">Date: ${entry.date}</li>
					<li class="entry-details">Mood: ${entry.mood}</li>
					<li class="entry-details">Concept: ${entry.concept} inches</li>
					<li class="entry-details">Entry: ${entry.entry}</li>
			</ul>
        </section>
    `;
};
