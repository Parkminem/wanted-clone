import React, {useState} from "react";
import {
    MenuItemBusiness,
    MenuItemMedia,
    MenuItemPersonnel,
    MenuItemGame,
    MenuItemFinance,
} from "./MenuItems";
import {Link} from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
    return (
        <div className={"dropdown-menu"}>
            <div
                className={"box"}
            >
                <div className={"category item"}>
                    영업
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                {MenuItemBusiness.map((item, index) => {
                    return (
                        <div className={"item"}>
                            {item.title}
                        </div>
                    );
                })}
                <div className={"item"}>
                    더보기
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
            </div>
            <div
                className={"box"}
            >
                <div className={"category item"}>
                    미디어
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                {MenuItemMedia.map((item, index) => {
                    return (
                        <div className={"item"}>
                            {item.title}
                        </div>
                    );
                })}
                <div className={"item"}>
                    더보기
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
            </div>
            <div
                className={"box"}
            >
                <div className={"category item"}>
                    인사
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                {MenuItemPersonnel.map((item, index) => {
                    return (
                        <div className={"item"}>
                            {item.title}
                        </div>
                    );
                })}
                <div className={"item"}>
                    더보기
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
            </div>

            <div
                className={"box"}
            >
                <div className={"category item"}>
                    게임 제작
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                {MenuItemGame.map((item, index) => {
                    return (
                        <div className={"item"}>
                            {item.title}
                        </div>
                    );
                })}
                <div className={"item"}>
                    더보기
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
            </div>

            <div
                className={"box"}
            >
                <div className={"category item"}>
                    금융
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                {MenuItemFinance.map((item, index) => {
                    return (
                        <div className={"item"}>
                            {item.title}
                        </div>
                    );
                })}
                <div className={"item"}>
                    더보기
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
            </div>
            <div
                className={"box"}
                style={{
                    height: "370px"
                }}
            >
                <div className={"category item"}>
                    엔지니어링·설계
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                <div className={"category item"}>
                    물류·무역
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                <div className={"category item"}>
                    제조·생산
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                <div className={"category item"}>
                    의료·제작·바이오
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                <div className={"category item"}>
                    교육
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                <div className={"category item"}>
                    법률·법집행기관
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                <div className={"category item"}>
                    식·음료
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                <div className={"category item"}>
                    건설·시설
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
                <div className={"category item"}>
                    공공·복지
                    <i className="fas fa-xs fa-chevron-right"/>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
