import { useState, useEffect, useCallback } from "react"
import { Button } from '../components/commons/Button';
import { Input } from '../components/commons/Input';
import { conectorServices } from '@src/services/api-conector';
import { useNotifyContent } from "@src/contexts/NotifyProvider";

const serviceCategories = conectorServices('Categories');
const serviceItem = conectorServices('Items');

const object = {
    brand: null,
    categoryId: 1,
    categoryName: 'Mocasines',
    color: null,
    currency: "USD",
    description: null,
    imageURL: null,
    model: null,
    origin: null,
    price: null,
    size: null,
    stock: null,
}

export const CreateNewProduct = () => {
    const { handleNotify } = useNotifyContent();
    const [categories, setCategories] = useState([])
    const [item, setItem] = useState({ ...object })

    const handleValue = (key, value) => {
        item[key] = value;
        setItem({
            ...item,
        });
    };
    const handleCategory = (id) => {
        const { name } = categories.find(i => i.id === id);
        item.categoryId = id;
        item.categoryName = name;
    }
    const createProduct = async () => {
        await serviceItem.create(item);
        handleNotify();
    }


    const promise = useCallback(async (id) => {
        const categories = await serviceCategories.getAll();
        setCategories(categories)
    }, [setCategories]);

    useEffect(() => {
        promise()
    }, [promise])

    return (
        <>
            <div className="container" style={{ marginTop: '50px' }}>
                <div style={{ width: 600, margin: "0px auto" }}>
                    <h1 className="text-center">Create New Product</h1>
                    <form style={{ marginTop: '50px' }}>

                        <div className="row">
                            <div className="col-sm-4">
                                <Input
                                    title="Brand"
                                    value={item.brand}
                                    onChange={(e) => handleValue("brand", e.target.value)}
                                />
                            </div>
                            <div className="col-sm-4">
                                <Input
                                    title="Model"
                                    value={item.model}
                                    onChange={(e) => handleValue("model", e.target.value)}
                                />
                            </div>
                            <div className="col-sm-4">
                                <Input
                                    title="Color"
                                    value={item.color}
                                    onChange={(e) => handleValue("color", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label className="form-label">Currency</label>
                                    <select disabled className="form-select"
                                        defaultValue={item.currency}
                                        onChange={(e) => handleValue("currency", e.target.value)}
                                    >
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label className="form-label">Category</label>
                                    <select defaultValue={item.categoryId} className="form-select"
                                        onChange={(e) => handleCategory(e.target.value)}
                                    >
                                        {categories?.map((i, index) => (
                                            <option key={index} value={i.id}>{i.name}</option>
                                        ))}

                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <Input
                                    title="Origin"
                                    value={item.origin}
                                    onChange={(e) => handleValue("origin", e.target.value)}
                                />
                            </div>
                        </div>
                        <Input
                            title="Description"
                            value={item.description}
                            onChange={(e) => handleValue("description", e.target.value)}
                        />

                        <div className="row">
                            <div className="col-sm-4">
                                <Input
                                    title="Price"
                                    type="number"
                                    value={item.price}
                                    onChange={(e) => handleValue("price", Number(e.target.value))}
                                />
                            </div>
                            <div className="col-sm-4">
                                <Input
                                    title="Size"
                                    type="number"
                                    value={item.size}
                                    onChange={(e) => handleValue("size", Number(e.target.value))}
                                />
                            </div>
                            <div className="col-sm-4">
                                <Input
                                    title="Stock"
                                    type="number"
                                    value={item.stock}
                                    onChange={(e) => handleValue("stock", Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <Input
                            title="Image URL"
                            value={item.imageURl}
                            onChange={(e) => handleValue("imageURL", e.target.value)}
                        />
                        <Button variant="primary" textButton="SAVE" click={() => createProduct()} />
                    </form>
                </div>

            </div>

        </>
    )
}

export default CreateNewProduct;