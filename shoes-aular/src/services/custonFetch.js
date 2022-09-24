
export const custonFetch = (time, task, is_ok = true) => {

    return new Promise((resolver, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolver(task);
            } else {
                reject({ success: false, message: 'Task error' })
            }
        }, time)
    })
}