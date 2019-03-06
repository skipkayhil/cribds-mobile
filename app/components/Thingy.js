export default thingy(
  projects = firestoreConnect(['projects'])
  connect((proj) => ({
  	<ListItem key=proj><Text>{proj.title}</Text></ListItem>
  }))
)(ButtonProjects);