import React from 'react'
// import style from './input.module.css'
import { Controller } from 'react-hook-form';
import { Select } from 'antd';


function SimpleInput({
    control,
    name,
    label,
    errors,
    showLabel = true,
    type,
    maxLenght,
    className,
    ...rest
}) {
    return (
        <>
            <div className="col-lg-12">
                <div className={"form-group"}>
                    {showLabel && (
                        <label style={{ fontWeight: '600' }} htmlFor={name}>
                            {label}
                        </label>
                    )}
                    <Controller
                        control={control}
                        name={name}
                        render={({ field }) => {
                            return (
                                <input
                                    maxLength={maxLenght}
                                    type={type}
                                    className={style.Input}
                                    {...field}
                                    {...rest}
                                />
                            )
                        }}
                    />
                    {errors[name] && (
                        <p
                            style={{
                                margin: "5px 0px",
                                fontSize: "12px",
                                color: 'red'
                            }}
                        >
                            {errors[name]?.message}
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default SimpleInput
