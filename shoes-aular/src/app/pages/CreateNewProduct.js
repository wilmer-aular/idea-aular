import { useState, useEffect, useCallback } from "react"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../components/commons/Button';
import { Input } from '../components/commons/Input';
import { conectorServices } from '@src/services/api-conector';
import { useNotifyContent } from "@src/contexts/NotifyProvider";
import { validateItem, validateProduct } from '@src/utils/util';
import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';

const serviceCategories = conectorServices('Categories');
const serviceItem = conectorServices('Items');



export const CreateNewProduct = () => {
    let [queryParams] = useSearchParams();
    const id = queryParams.get('id');
    const [err, setErr] = useState({});
    const navegate = useNavigate();
    const { handleNotify } = useNotifyContent();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [origin, setOrigin] = useState({})
    const [item, setItem] = useState({
        categoryId: 1,
        categoryName: 'Mocasines',
        currency: "USD",
        stock: 0,
        price: 0,
    });

    const handleValue = (key, value) => {
        item[key] = value;
        setItem({
            ...item,
        });
    };
    const handleCategory = (id) => {
        const { name } = categories.find(i => i.id === id);
        item.categoryId = Number(id);
        item.categoryName = name;
    }
    const createProduct = async () => {
        const error = validateProduct(item);
        if (error) {
            setErr(error);
            return;
        }
        setLoading(true);
        try {
            if (id) {
                await serviceItem.update(id, validateItem(item, origin));
                navegate(`/detail/${id}`)
            } else {
                const { id } = await serviceItem.create(item);
                navegate(`/detail/${id}`)
            }
            handleNotify();
        } catch (error) {
            console.error(err);
            handleNotify("Task Error", "error");
        } finally {
            setLoading(false)
        }
    }

    const promise = useCallback(async (id) => {
        setLoading(true);
        try {
            const promises = [serviceCategories.getAll()]
            if (id) {
                promises.push(serviceItem.getById(id))
            }
            const resolver = await Promise.all(promises);
            setCategories(resolver[0]);
            if (resolver[1]) {
                setItem(resolver[1]);
                setOrigin({ oldStock: resolver[1].stock, oldPrice: resolver[1].price });
            }
        } catch (err) {
            console.error(err);
            handleNotify("An error occurred", "error");
        } finally {
            setLoading(false)
        }
    }, [setCategories, setItem, setOrigin, setLoading, handleNotify]);

    useEffect(() => {
        promise(id)
    }, [promise, id])

    return (
        <>
            {loading ? (<>
                <LoadingLottie loading={loading} />
            </>) : (<>
                <div className="container" style={{ marginTop: '50px' }}>
                    <div style={{ width: 600, margin: "0px auto" }}>
                        <h1 className="text-center">{id ? 'Update' : 'Create'} New Product</h1>
                        <form style={{ marginTop: '50px' }}>

                            <div className="row">
                                <div className="col-sm-4">
                                    <Input
                                        title="Brand"
                                        value={item.brand}
                                        error={err.brand}
                                        onChange={(e) => handleValue("brand", e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <Input
                                        title="Model"
                                        value={item.model}
                                        error={err.model}
                                        onChange={(e) => handleValue("model", e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <Input
                                        title="Color"
                                        value={item.color}
                                        error={err.color}
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
                                        error={err.origin}
                                        onChange={(e) => handleValue("origin", e.target.value)}
                                    />
                                </div>
                            </div>
                            <Input
                                title="Description"
                                value={item.description}
                                error={err.description}
                                onChange={(e) => handleValue("description", e.target.value)}
                            />

                            <div className="row">
                                <div className="col-sm-6">
                                    <Input
                                        title="Price"
                                        type="number"
                                        value={item.price}
                                        error={err.price}
                                        onChange={(e) => handleValue("price", Number(e.target.value))}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <Input
                                        title="Stock"
                                        type="number"
                                        value={item.stock}
                                        error={err.stock}
                                        onChange={(e) => handleValue("stock", Number(e.target.value))}
                                    />
                                </div>
                            </div>
                            <Input
                                title="Image URL"
                                value={item.imageURL}
                                error={err.imageURL}
                                onChange={(e) => handleValue("imageURL", e.target.value)}
                            />
                            <Button variant="primary" textButton="SAVE" click={() => createProduct()} />
                        </form>
                    </div>

                </div>

            </>)}
        </>
    )
}

export default CreateNewProduct;