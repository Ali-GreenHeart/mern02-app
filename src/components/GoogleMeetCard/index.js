import styles from "./index.module.css"

function GoogleMeetCard({ sekil, name, username }) {
    return (
        <div className={styles.container}>
            <p className={styles.mute}>🔇</p>
            {
                sekil ?
                    <img
                        className={styles.img}
                        src={sekil} />
                    :
                    <div style={{
                        fontSize: 64, backgroundColor: 'red',
                        display: 'flex',
                        justifyContent: 'center', alignItems: 'center'
                    }} className={styles.img}>
                        {username[0]}
                    </div>

            }
            <h4 className={styles.username}>{name}({username})</h4>
        </div>
    )
}

export default GoogleMeetCard;
