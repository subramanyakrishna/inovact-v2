import React, { useState, useEffect } from 'react'
import expandDown from '../../../../../../images/settings/expandDownIcon.svg'
import expandUp from '../../../../../../images/settings/expandUpIcon.svg'

interface PropType {
    selected: number
    onSelection(option: number): any
    options: { name: string; main: string; sub: string }[]
    logOut(): any
    deleteAccount(): any
}
const SettingsLeft: React.FC<PropType> = ({
    selected,
    onSelection,
    options,
    logOut,
    deleteAccount,
}) => {
    const [expand, setExpand] = useState(false)
    const SIZE_LIMIT: number = 768

    return (
        <div className="settings-left">
            {window.innerWidth > SIZE_LIMIT && (
                <>
                    <div className="heading-secondary text-color--black text-style--bold settings-left-pad settings-left-heading">
                        Account Settings
                    </div>
                    <hr />
                </>
            )}

            {options.map((option, i) => (
                <div
                    key={i}
                    onClick={() => {
                        onSelection(i)
                    }}
                    className={'settings-left-main-container '}
                >
                    <div
                        className={`settings-left-container ${
                            i == selected && 'settings-left-selected'
                        }`}
                    >
                        <div
                            className={
                                'settings-left-pad paragraph-primary text-style--bold  text-color--black settings-left-main '
                            }
                        >
                            {option.main}
                        </div>
                        {option.sub.length ? (
                            <div
                                className={
                                    'settings-left-pad settings-left-sub text-size--small'
                                }
                            >
                                {option.sub}
                            </div>
                        ) : (
                            '  '
                        )}
                    </div>
                    <hr />
                </div>
            ))}
            <div className={'settings-left-expandicon'}>
                {expand ? (
                    <img
                        src={expandUp}
                        onClick={() => setExpand(!expand)}
                        alt=""
                    />
                ) : (
                    <img
                        src={expandDown}
                        onClick={() => setExpand(!expand)}
                        alt=""
                    />
                )}
            </div>
            {expand && (
                <div className={'settings-left-expandedText'}>
                    <div
                        className={
                            'settings-left-expand-signout paragraph-secondary text-style--bold'
                        }
                        onClick={logOut}
                    >
                        {' '}
                        Sign Out
                    </div>
                    <div
                        className={
                            'settings-left-expand-deactivate paragraph-secondary text-style--bold'
                        }
                        onClick={deleteAccount}
                    >
                        Deactivate Account
                    </div>
                </div>
            )}
        </div>
    )
}
export default SettingsLeft
