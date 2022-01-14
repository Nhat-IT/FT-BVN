const setUser = (context, user) => {
    user = user.toUpperCase();
    context.commit('setUser', user)
}

export default setUser;