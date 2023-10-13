import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayouts from '../../components/organisms/Dashboard/Layouts/index'

export default function RoutesIndex() {
    const Dashboard = lazy(() => import('../Dashboard'))
    const Product = lazy(() => import('../Product'))
    const ProductForm = lazy(() => import('../Product/Form'))
    const EditProduct = lazy(() => import('../Product/Form/Edit'))
    const Size = lazy(() => import('../Size'))
    const SizeForm = lazy(() => import('../Size/Form'))
    const EditSize = lazy(() => import('../Size/Form/Edit'))

    return (
        <MainLayouts>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<div>loading...</div>}>
                            <Dashboard />
                        </Suspense>
                    }
                />
                <Route
                    path="/product"
                    element={
                        <Suspense fallback={<div>loading...</div>}>
                            <Product />
                        </Suspense>
                    }
                />
                <Route
                    path="/product/form"
                    element={
                        <Suspense fallback={<div>loading...</div>}>
                            <ProductForm />
                        </Suspense>
                    }
                />
                <Route
                    path="/product/:masterProductId/user/:userId"
                    element={
                        <Suspense fallback={<div>loading...</div>}>
                            <EditProduct />
                        </Suspense>
                    }
                />
                <Route
                    path="/size"
                    element={
                        <Suspense fallback={<div>loading...</div>}>
                            <Size />
                        </Suspense>
                    }
                />
                <Route
                    path="/size/form"
                    element={
                        <Suspense fallback={<div>loading...</div>}>
                            <SizeForm />
                        </Suspense>
                    }
                />
                <Route
                    path="/size/:sizeId"
                    element={
                        <Suspense fallback={<div>loading...</div>}>
                            <EditSize />
                        </Suspense>
                    }
                />
            </Routes>
        </MainLayouts>
    )
}
