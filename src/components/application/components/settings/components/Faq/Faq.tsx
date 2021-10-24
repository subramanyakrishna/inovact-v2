import React from 'react'
import map from '../../../../../../images/settings/map.png'
const Faq: React.FC = () => {
    return (
        <div className={'faq'}>
            <div
                className={
                    'faq-head paragraph-primary  text-color--black text-style--bold'
                }
            >
                Contact us
            </div>
            <div
                className={
                    'text-size--small text-color--black text-style--bold'
                }
            >
                Having trouble, reach out to us and we will get in touch as soon
                as possible
            </div>
            <div className={'faq-call'}>
                You can call us at: <a href="tel:8317324315">+91 8317324315</a>
            </div>
            <div className={'faq-mail'}>
                or drop us a mail at{' '}
                <a href="mailto:inovacteam@gmail.com">inovacteam@gmail.com</a>
            </div>
            <div className={'faq-headQ text-style--bold'}>Headquarters</div>
            <img src={map} alt={'inovact location'} />
            <div
                className={
                    'faq-head paragraph-primary  text-color--black text-style--bold'
                }
            >
                FAQ
            </div>
            <div className={'text-color--green text-style--bold'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
                orci posuere libero bibendum luctus. Nunc vitae odio in turpis
                efficitur ultrices ac id dui ?
            </div>
            <div className={'text-color--black'}>
                ortor est, consequat id ligula ut, tempor ultrices nibh. Integer
                quis ante eu libero placerat elementum lobortis pulvinar mauris.
                Proin quis cursus nisl. Nulla pretium diam non eros pharetra
                vulputate. Integer lobortis ex erat, sed tristique odio iaculis
                eget. Aenean quis felis mollis, semper risus quis, malesuada
                sapien. Sed eget nisl ut lacus elementum ornare. Cras mollis dui
                eu urna tempor, scelerisque dignissim augue aliquet. Nullam dui
                massa, pretium eleifend leo sed, finibus dignis
            </div>
            <div className={'text-color--green text-style--bold'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
                orci posuere libero bibendum luctus. Nunc vitae odio in turpis
                efficitur ultrices ac id dui ?
            </div>
            <div className={'text-color--black'}>
                ortor est, consequat id ligula ut, tempor ultrices nibh. Integer
                quis ante eu libero placerat elementum lobortis pulvinar mauris.
                Proin quis cursus nisl. Nulla pretium diam non eros pharetra
                vulputate. Integer lobortis ex erat, sed tristique odio iaculis
                eget. Aenean quis felis mollis, semper risus quis, malesuada
                sapien. Sed eget nisl ut lacus elementum ornare. Cras mollis dui
                eu urna tempor, scelerisque dignissim augue aliquet. Nullam dui
                massa, pretium eleifend leo sed, finibus dignis ortor est,
                consequat id ligula ut, tempor ultrices nibh. Integer quis ante
                eu libero placerat elementum lobortis pulvinar mauris. Proin
                quis cursus nisl. Nulla pretium diam non eros pharetra
                vulputate.
            </div>
            <div className={'text-color--green text-style--bold'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
                orci posuere libero bibendum luctus. Nunc vitae odio in turpis
                efficitur ultrices ac id dui ?
            </div>
            <div className={'text-color--black'}>
                ortor est, consequat id ligula ut, tempor ultrices nibh. Integer
                quis ante eu libero placerat elementum lobortis pulvinar mauris.
                Proin quis cursus nisl. Nulla pretium diam non eros pharetra
                vulputate. Integer lobortis ex erat, sed tristique odio iaculis
                eget. Aenean quis felis mollis, semper risus quis, malesuada
                sapien. Sed eget nisl ut lacus elementum ornare. Cras mollis dui
                eu urna tempor, scelerisque dignissim augue aliquet. Nullam dui
                massa, pretium eleifend leo sed, finibus dignis
            </div>
        </div>
    )
}

export default Faq
