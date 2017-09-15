export const getUserAppointments = ({appointments}) => {
  let appts = [];
  for (let id in appointments){
    if (appointments[id].user_id === this.props.currentUser.id) {
      appts.push(appointments[id]);
    }
    return appts;
  }
};
