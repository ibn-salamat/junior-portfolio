
// New VueJS instance
new Vue({
  // CSS selector of the root DOM element
  el: '#notebook',
  // Some data
  filters:{
    date: function(time){
        return moment(time).format('DD/MM/YY, HH:mm')
    }
  },
  data() {
    return {
      // New! A note array
      notes: JSON.parse(localStorage.getItem('notes')) || [{
        id: '1',
        title: 'New note 1',
        content: `# New note 1`,
        created: 5
      }],
      selectedId: localStorage.getItem('selected-id') || '1',
    }
  },
  methods: {
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes))
      console.log('Notes saved!', new Date())
    },
    addNote() {
      const time = Date.now()
      // Default new note
      const note = {
        id: String(time),
        title: 'New note ' + (this.notes.length + 1),
        content: `# New note ${(this.notes.length + 1)}`,
        created: time
      }
      // Add to the list
      this.notes.push(note)
    },
    selectNote(note) {
      this.selectedId = note.id
    },
    removeNote() {
      if (this.selectedNote && confirm('Delete the note?')) {
        // Remove the note in the notes array
        const index = this.notes.indexOf(this.selectedNote)
        if (index !== -1) {
          this.notes.splice(index, 1)
        }
      }
    },
  },
  computed: {
    notePreview() {
      // Markdown rendered to HTML
      return marked(this.selectedNote.content)
    },
    addButtonTitle() {
      return this.notes.length + ' note(s) already'
    },
    selectedNote() {
      // We return the matching note with selectedId
      return this.notes.find(note => note.id === this.selectedId)
    },


  },
  watch: {
    notes: {
      // The method name
      handler: 'saveNotes',
      // We need this to watch each note's properties inside the array
      deep: true,
    },
    selectedId(val) {
      localStorage.setItem('selected-id', val)
    }
  }
})