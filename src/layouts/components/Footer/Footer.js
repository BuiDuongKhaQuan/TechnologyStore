import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Calendar,
    Copyright,
    EnvelopeSimple,
    FacebookLogo,
    LinkedinLogo,
    MapPin,
    Phone,
    TwitterLogo,
    WhatsappLogo,
} from '@phosphor-icons/react';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <div className={cx('footer_wrapper')} style={{ backgroundImage: `url(${images.footer_bg_1})` }}>
            <div className={cx('container')}>
                <div className={cx('slogan', 'p_15')}>
                    <Image width={'189px'} src={images.logo} />
                    <p>
                        Globally communicate adaptive e-markets & timely manufactured product. Objectively exploit
                        collaborative relationships vis-a-vis competitive manufactured.
                    </p>
                    <div className={cx('fanpage')}>
                        <Button
                            className={cx('fanpage_button')}
                            circle
                            leftIcon={<FacebookLogo size={25} weight="fill" color="#ffffff" />}
                        />
                        <Button
                            className={cx('fanpage_button')}
                            circle
                            leftIcon={<TwitterLogo size={25} weight="fill" color="#ffffff" />}
                        />
                        <Button
                            className={cx('fanpage_button')}
                            circle
                            leftIcon={<LinkedinLogo size={25} weight="fill" color="#ffffff" />}
                        />
                        <Button
                            className={cx('fanpage_button')}
                            circle
                            leftIcon={<WhatsappLogo size={25} weight="fill" color="#ffffff" />}
                        />
                    </div>
                </div>
                <div className={cx('link', 'p_15')}>
                    <h2 className={cx('title')}>Quick Links</h2>
                    <div className={cx('list')}>
                        <Link className={cx('_link')}>
                            <ArrowRight className={cx('arrow_icon')} size={20} weight="bold" />
                            About Us
                        </Link>
                        <Link className={cx('_link')}>
                            <ArrowRight className={cx('arrow_icon')} size={20} weight="bold" />
                            Tour
                        </Link>
                        <Link className={cx('_link')}>
                            <ArrowRight className={cx('arrow_icon')} size={20} weight="bold" />
                            Destinations
                        </Link>
                        <Link className={cx('_link')}>
                            <ArrowRight className={cx('arrow_icon')} size={20} weight="bold" />
                            Blog
                        </Link>
                        <Link className={cx('_link')}>
                            <ArrowRight className={cx('arrow_icon')} size={20} weight="bold" />
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className={cx('contact', 'p_15')}>
                    <h2 className={cx('title')}>Contact Us</h2>
                    <div className={cx('list')}>
                        <div className={cx('contact_item')}>
                            <span className={cx('item_icon')}>
                                <MapPin size={13} weight="fill" />
                            </span>
                            <span className={cx('item_text')}>Linh Trung, Thu Duc, TPHCM</span>
                        </div>
                        <div className={cx('contact_item')}>
                            <span className={cx('item_icon')}>
                                <Phone size={13} weight="fill" />
                            </span>
                            <span className={cx('item_text')}>+(84) 098 765 4131</span>
                        </div>
                        <div className={cx('contact_item')}>
                            <span className={cx('item_icon')}>
                                <EnvelopeSimple size={13} weight="fill" />
                            </span>
                            <span className={cx('item_text')}>info@travel.com</span>
                        </div>
                    </div>
                </div>
                <div className={cx('recent', 'p_15')}>
                    <h2 className={cx('title')}>Recent Posts</h2>
                    <div className={cx('list')}>
                        <div className={cx('recent_item')}>
                            <Image className={cx('post_img')} animation src={images.about_2_2} />
                            <div>
                                <h2>5 Ways To Get Your Dream Photos On Picnic</h2>
                                <Link className={cx('post_time')}>
                                    <Calendar size={18} weight="bold" color="#3cb371" />
                                    21 June, 2023
                                </Link>
                            </div>
                        </div>
                        <div className={cx('recent_item')}>
                            <Image className={cx('post_img')} animation src={images.about_2_2} />
                            <div>
                                <h2>5 Ways To Get Your Dream Photos On Picnic</h2>
                                <Link className={cx('post_time')}>
                                    <Calendar size={18} weight="bold" color="#3cb371" />
                                    21 June, 2023
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('copyright')}>
                <p>
                    Copyright <Copyright size={25} /> 2023 <Link className={cx('post_time_travel')}>Travel</Link>. All
                    Rights Reserved.
                </p>
                <div className={cx('copyright_term')}>
                    <Link className={cx('post_time')}>Terms of Use</Link>
                    <span>|</span>
                    <Link className={cx('post_time')}>Privacy Environmental Policy</Link>
                </div>
            </div>
        </div>
    );
}
