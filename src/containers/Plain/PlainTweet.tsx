import React, { FC, useContext } from 'react'
import { Profile, PlainContent, PlainTime, Response } from '@/components'
import { AppContext } from '@/pages'

type PlainTweetProps = {
    style?: React.CSSProperties
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>
}

const PlainTweet: FC<PlainTweetProps> = ({ style, onMouseDown }) => {
    const { response, cardColor } = useContext(AppContext)

    return (
        <div className="w-full p-2" style={style} onMouseDown={onMouseDown}>
            <Profile />
            <PlainContent />
            <div className="absolute bottom-8">
                {response && <Response />}
                <PlainTime />
            </div>
        </div>
    )
}



export default PlainTweet
