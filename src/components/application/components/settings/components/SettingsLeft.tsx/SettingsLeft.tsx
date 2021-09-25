import React, { useState, useEffect } from 'react'
import expandDown from '../../../../../../images/settings/expandDownIcon.svg'
import expandUp from '../../../../../../images/settings/expandUpIcon.svg'

interface PropType {
    selected: string
    onSelection(option: string): any
    options: { name: string; main: string; sub: string }[]
    onclick(): any
}
const SettingsLeft: React.FC<PropType> = ({
    selected,
    onSelection,
    options,
    onclick,
}) => {
    const [selectedOption, setSelectedOption] = useState(selected)
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        onSelection(selectedOption)
    }, [selectedOption])

    return (
        <div className="settings-left">
            {window.innerWidth > 768 && (
                <>
                    <div className="heading-secondary text-color--black text-style--bold settings-left-pad settings-left-heading ">
                        Account Settings
                    </div>
                    <hr />
                </>
            )}

            {options.map((option, i) => (
                <div
                    key={i}
                    onClick={(e) => {
                        setSelectedOption(option.name)
                        onclick()
                    }}
                    className={'settings-left-main-container '}
                >
                    <div
                        className={`settings-left-container ${
                            option.name == selectedOption &&
                            'settings-left-selected'
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
                <div className={'settings-left-expand'}>
                    <div
                        className={
                            'settings-left-expand-logout paragraph-secondary text-style--bold'
                        }
                    >
                        Log Out
                    </div>
                    <div
                        className={
                            'settings-left-expand-signout paragraph-secondary text-style--bold'
                        }
                    >
                        {' '}
                        Sign Out
                    </div>
                    <div
                        className={
                            'settings-left-expand-deactivate paragraph-secondary text-style--bold'
                        }
                    >
                        Deactivate Account
                    </div>
                </div>
            )}
        </div>
    )
}
export default SettingsLeft
